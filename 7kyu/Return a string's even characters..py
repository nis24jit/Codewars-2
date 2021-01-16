def even_chars(st): 
    if len(st) < 2 or len(st) > 100:
        return "invalid string"
    res = []
    for i in range(len(st)):  
         if i % 2 != 0:
                res.append(st[i])
    return res