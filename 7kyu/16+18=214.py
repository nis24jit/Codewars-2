def add(num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    length = max(len(str(num1)), len(str(num2)))
    minLength = min(len(str(num1)), len(str(num2)))
    res = []
    curNum = 0
    for i in range(length-1, -1, -1):
        if(len(num1) > len(num2)):
            if(minLength < 1):
                curNum = int(num1[i])
            else:
                curNum = int(num1[i]) + int(num2[minLength-1])
                minLength -= 1
            res.insert(0, str(curNum))
        elif(len(num1) < len(num2)):
            if(minLength < 1):
                curNum = int(num2[i])
            else:
                curNum = int(num2[i]) + int(num1[minLength-1])
                minLength -= 1
            res.insert(0, str(curNum))
        else:
            curNum = int(num2[i]) + int(num1[i])
            res.insert(0, str(curNum))
            
    return int(''.join(res))