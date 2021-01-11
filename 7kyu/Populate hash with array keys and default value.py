def populate_dict(keys, default):
    obj = {}
    for i in range(len(keys)):
        obj[keys[i]] = default
    return obj