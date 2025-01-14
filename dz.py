import math

def mathprogram():
    while True:
        print("Введите ваше квадратное уравнение")
        print("в таком виде: Aх^2 + Bx + C = 0")
        a = int(input("Введите 'a': "))
        b = int(input("Введите 'b': "))
        c = int(input("Введите 'c': "))

        z = b ** 2 - 4 * a * c
        if z > 1:
            final = b + math.isqrt(z) / a * 2
            final2 = b - math.isqrt(z) / a * 2
            rounded_num = round(final, 2)
            rounded_num2 = round(final2, 2)
            print(f" равен: {rounded_num}")
            print(f" равен: {rounded_num2}")
        elif z == 0:
            final3 = -b / 2 * a
            rounded_num3 = round(final3, 2)
            print(f" равен: {rounded_num3}")
        else:
            print(" 0")

        exit_input = input("Введите 'exit', если хотите завершить программу, или любую другую клавишу для продолжения: ")
        if exit_input.lower() == 'exit':
            print("До свидания!")
            break
        else:
            print("Продолжаем решать уравнения...")

        
mathprogram()