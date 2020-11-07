#Even or Odd - Which is Greater?

def even_or_odd(s):
    l = list(map(int,s))
    odd = sum(n for n in l if n&1)
    even = sum(l) - odd
    if  odd < even:
        return 'Even is greater than Odd'
    elif odd > even:
        return 'Odd is greater than Even'
    else:
        return 'Even and Odd are the same'