const Calculator = function () {
    this.evaluate = string => {
        string = string.split(' ')
        if (string.length == 1) return +string
        let go = true
        while (go) {
            for (let i = 1; i < string.length; i += 2) {
                if (string[i] == '*') {
                    const int = string[i - 1] * string[i + 1]
                    string.splice(i - 1, 3, int)
                    i = 0
                } else if (string[i] == '/') {
                    const int = string[i - 1] / string[i + 1]
                    string.splice(i - 1, 3, int)
                    i = 0
                }
                if (!string.includes('/') && !string.includes('*')) go = false
            }
        }
        while (string.length > 1) {
            for (let i = 1; i < string.length; i += 2) {
                if (string[i] == '+') {
                    const int = +string[i - 1] + +string[i + 1]
                    string.splice(i - 1, 3, int)
                    i = 0
                } else if (string[i] == '-') {
                    const int = +string[i - 1] - +string[i + 1]
                    string.splice(i - 1, 3, int)
                    i = 0
                }
            }
        }
        return +string
    }
};