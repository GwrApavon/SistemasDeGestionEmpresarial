class Vehiculo():

    def __init__(self, nombre, anioFabricacion, velocidad, kilometros, velocidadMaxima,matricula, combustible = 0,ruedas= 0):
            self.__nombre = nombre
            self.__matricula = matricula
            self.__ruedas = ruedas
            self.__anioFabricacion = anioFabricacion
            self.__velocidad = velocidad
            self.__kilometros = kilometros
            self.__combusitble = combustible
            self.__velocidadMaxima = velocidadMaxima

    def aString(self):

        return 'Nombre: ' + self.__nombre + '\nMatricula: ' + self.__matricula + '\nRuedas: ' + self.__ruedas + '\nanioFabricacion: ' + self.__anioFabricacion + '\nvelocidad: ' + self.__velocidad + '\nCombustible: ' + self.__combusitble + '\nVelocidad Maxima: ' + self.__velocidadMaxima
                

    def acelerar(self, v):

        if v > self.__velocidad and v < self.__velocidadMaxima:
            self.__velocidad = v

    def frenar(self, v):

        if v < self.__velocidad:
            self.__velocidad = v