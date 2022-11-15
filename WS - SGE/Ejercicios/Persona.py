# Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:

# Un constructor, donde los datos pueden estar vacíos.
# Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
# mostrar(): Muestra los datos de la persona.
# esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

class Persona():

    def __init__(self, nombre = "", edad = 0, dni = ""):
        self.__nombre = nombre
        self.__edad = edad
        self.__dni = dni

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre
    
    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, edad):
        if edad>0:
            self.__edad = edad
        else:
            print('Edad no válida')

    @property
    def dni(self):
        return self.__dni

    @nombre.setter
    def dni(self, dni):
        if Persona.valDni(dni):
            self.__dni = dni
        else:
            print('Dni no valido')
    
    def Mostrar(self):
        return 'Nombre: ' + self.__nombre + ' Edad: ' + str(self.__edad) + ' DNI: ' + self.__dni


    def MayorEdad(self):
        if self.__edad > 18:
           return True
        return False

    def calLetra(n):
        res = n%23
        letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
        return letras[res]

    def valDni(dni):
        if dni[8] == Persona.calLetra(int(dni[:8])):
            return True
        return False
    

    