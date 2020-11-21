const constants = {
    namesOfVars: 'abcdefghijklmnopqrstuvwxyz',
    opVars: '+-/%*'
}

function Interpreter() {
    this.vars = {},
        this.functions = {};
}

Interpreter.prototype.parseInterpreter = function (program) {
    if (program == "") return [];
    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(s => !s.match(/^\s*$/)).map(v => v.match(/^\d+\.?\d*$/) ? +v : v);
};

Interpreter.prototype.construct = function (input) {
    return calc(input.map(el => this.vars[el] ? this.vars[el] : el).join(''))
}

Interpreter.prototype.isValidFunctionVars = function (l, r, input) {
    if (l.join('') !== r.join('') && r.length > 0 || [...new Set(l)].join('') !== l.join('') || input[0] == '(' || this.vars[input[1]] != undefined) throw new Error('function error')
    return true
}

Interpreter.prototype.isValidInput = function (input) {
    if (input.length === 0) return true
    if (!input.some(e => constants.opVars.includes(e)) && !constants.namesOfVars.includes(input[0][0]) && input.length > 1) throw new Error('Input is not correct')
}

Interpreter.prototype.input = function (x) {
    let input = this.parseInterpreter(x);
    try {
        if (this.isValidInput(input)) return ''
    } catch (e) {
        throw e
    }
    if (x.length == 1) {
        try {
            if (+input == +input) return +input
            if (this.functions[x]) return +this.functions[x][1].join('')
            if (this.vars[x]) return this.vars[x]
            if (!this.vars[x]) throw new Error("Missing identifier: ");
        } catch (e) {
            throw e
        }
    } else if (input.includes('fn')) {
        const idx = input.indexOf('=')
        const fbody = input.slice(idx + 2)
        const lvars = input.slice(2, idx)
        const rvars = fbody.filter(e => constants.namesOfVars.includes(e))

        try {
            this.isValidFunctionVars(lvars, rvars, input)
        } catch (e) {
            throw e
        }
        const func = [lvars, fbody];
        this.functions[input[1]] = func
        return ''
    } else if (this.functions[input[0]]) {
        let firstF = true
        let count = 0
        for (let i = input.length - 1; i >= 0; i--) {
            let fn, vars, fbody;
            const lvars = {};
            if (this.functions[input[i]]) {
                try {
                    fn = this.functions[input[i]], vars = fn[0], fbody = fn[1]
                    const args = input.slice(i + 1, firstF || i == 0 ? input.length : input.length - count)
                    if (args.length != vars.length) throw Error('dif vars')
                    args.forEach((_, i) => (lvars[vars[i]] = args[i]))
                    fbody = fbody.map(e => lvars[e] ? lvars[e] : e)
                    const res = calc(fbody.join(''))
                    input.splice(i, vars.length + 1, res)
                    firstF = false
                    count++
                } catch (e) {
                    throw e
                }
            }
        }
    } else if (input.includes('=')) {
        while (input.includes('=')) {
            const idx = input.lastIndexOf('=');
            const r = input.slice(input[idx - 2] == '(' ? idx - 2 : idx - 1);
            const rCount = r[0] == '(' ? r.slice(3, r.length - 1) : r.slice(2, r.length);
            const rRes = calc(rCount.join(''))
            const rIdx = r[0] == '(' ? 1 : 0
            const res = this.construct(rCount)
            this.vars[r[rIdx]] = res
            input.splice(input[idx - 2] == '(' ? idx - 2 : idx - 1, r.length, res)
        }
    } else if (input.some(el => constants.namesOfVars.includes(el))) {
        input = this.construct(input)
    } else {
        return calc(input.join(''))
    }
    return +input
}


function calc(expression) {
    let tokens = expression.match(/([0-9.]+|[-+*/%()])/g);

    function expr() {
        let result = term();
        while (true) {
            let token = tokens.shift();
            if (token == '+') {
                result += term();
            } else if (token == '-') {
                result -= term();
            } else {
                tokens.unshift(token);
                return result;
            }
        }
    }

    function term() {
        let result = factor();
        while (true) {
            let token = tokens.shift();
            if (token == '*') {
                result *= factor();
            } else if (token == '/') {
                result /= factor();
            } else if (token == '%') {
                result %= factor();
            } else {
                tokens.unshift(token);
                return result;
            }
        }
    }

    function factor() {
        let token = tokens.shift();
        if (token == '-') return -factor();
        if (token == '(') {
            let result = expr();
            tokens.shift();
            return result;
        }
        return +token;
    }

    return expr();
}