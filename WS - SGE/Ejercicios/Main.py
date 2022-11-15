# Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:

# Un constructor, donde los datos pueden estar vacíos.
# Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
# mostrar(): Muestra los datos de la persona.
# esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

from Persona import Persona
from Cuenta import Cuenta
from CuentaJoven import CuentaJoven
while True:
    
    nombre = 'Angel' #input('Introduce tu nombre: ')

    edad = 19 #int(input('Introduce tu edad: '))
    while edad <= 0:
        edad = int(input('Introduce tu edad: '))

    dni = '12312312K' #input('Introduce tu dni: ')
    while Persona.valDni(dni) == False:
        dni = input('Introduce tu dni: ')

    p1 = Persona(nombre, edad, dni)

    
    print(p1.Mostrar())

    if p1.MayorEdad:
        print( p1.nombre ,' es mayor de edad')

    # salida = input('Quieres salir y/n? ')
    # if salida == 'y' or salida =='Y':
    break

c1 = Cuenta(p1, 1000)
cj1 = CuentaJoven(c1, 15)
print(c1.Mostrar())
print(cj1.Mostrar())

cant = int(input('Cuanto dinero quieres retirar: '))
cj1.Retirar(cant)
print(cj1.cantidad)

