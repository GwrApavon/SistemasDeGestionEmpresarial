import ctypes
from Cuenta import Cuenta

class CuentaJoven(Cuenta):
    def __init__(self, c , bono=0):
        super().__init__(c.titular,c.cantidad)
        self.__bono = bono

    @property
    def bono(self):
        return self.__bono

    @bono.setter
    def bono(self, bono):

        if bono > 0 and bono < 100:
            self.__bono = bono

    def EsTitularValido(self):
        return self.titular.edad > 18 and self.titular.edad < 25
            
    
    def Retirar(self, retiro):
        if CuentaJoven.EsTitularValido(self) and retiro > 0:
            print('Se ha retirado con exito')
            super().Retirar(retiro)
        else:
            print('No se ha podido retirar')
            return

    def Mostrar(self):
        return super().Mostrar() + ', Bono por cuenta Joven: ' + str(self.__bono) + '%'