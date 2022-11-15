from Persona import Persona
class Cuenta():

    def __init__(self, titular = Persona(), cantidad = 0):
        self.__titular = titular
        self.__cantidad = cantidad


    @property
    def titular(self):
        return self.__titular

    @titular.setter
    def titular(self, titular):
        self.__titular = titular
    
    @property
    def cantidad(self):
        return self.__cantidad

    @cantidad.setter
    def cantidad(self, cantidad):
            
            self.__cantidad = cantidad


    def Ingresar(self, ingreso):

        if ingreso > 0:
            self.__cantidad += ingreso

    def Retirar(self, retiro):

        self.__cantidad -= retiro

    
    def Mostrar(self):
        return 'Titular: ' + self.__titular.Mostrar() + ' Cantidad: ' + str(self.__cantidad)