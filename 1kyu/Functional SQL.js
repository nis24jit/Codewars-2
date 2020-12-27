class Query {
    constructor() {
        this.data = []
        this.fn
        this.whereFn
        this.groupFn
        this.orderFn
        this.haveFn
        this.fWhere = []
        this.selected = 0
        this.formed = 0
        this.grouped = 0
        this.orded = 0
    }
    select(fn) {
        if (fn instanceof Function) {
            this.fn = fn
        }
        this.selected++
        if (this.selected > 1) throw new Error('Duplicate SELECT')
        return this
    }
    from(data, dataNext) {
        this.data = data
        this.formed++
        if (this.formed > 1) throw new Error('Duplicate FROM')
        if (dataNext) {
            const arr = []
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < dataNext.length; j++) {
                    arr.push([data[i], dataNext[j]])
                }
            }
            this.data = arr
        }
        return this
    }
    where(...fn) {
        if (this.fWhere.length > 0) {
            this.fWhere.push(fn[0])
        }
        this.fWhere.push(fn[0])
        this.whereFn = fn

        return this
    }
    groupBy(...fn) {
        this.grouped++
        if (this.grouped > 1) throw new Error('Duplicate GROUPBY')
        this.groupFn = fn
        return this
    }
    having(fn) {
        this.haveFn = fn
        return this
    }
    _groupFn(data, fn) {
        if (!fn.length) {
            return data
        }
        const firstFn = fn.shift()
        const arr = data.reduce((arr, item) => {
            let key = firstFn(item)
            arr[key] = arr[key] || []
            arr[key].push(item)
            return arr
        }, {})
        return Object.entries(arr).map(([name, element]) => {
            if (!isNaN(parseFloat(name))) {
                name = Number(name)
            }
            return [name, this._groupFn(element, fn.slice())]
        })
    }
    orderBy(fn) {
        this.orded++
        if (this.orded > 1) throw new Error('Duplicate ORDERBY')
        this.orderFn = fn
        return this
    }
    execute() {
        let exData = this.data.slice()
        if (this.whereFn && this.fWhere.length < 2) {
            exData = exData.filter(e => {
                return this.whereFn.some(fn => fn(e))
            })
        }
        if (this.fWhere.length > 1) {
            exData = exData.filter(e => {
                return this.fWhere.every(fn => fn(e))
            })
        }
        if (this.groupFn) {
            exData = this._groupFn(exData, this.groupFn.slice())
        }
        if (this.haveFn) {
            exData = exData.filter(this.haveFn)
        }
        if (this.fn) {
            exData = exData.map(this.fn)
        }
        if (this.orderFn) {
            exData = exData.sort(this.orderFn)
        }


        return exData
    }
}

function query() {
    return new Query()
}