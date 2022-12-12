from Vehiculo import Vehiculo

class Coche(Vehiculo):

    def __init__(self, v, motor):
        super().__init__(v.nombre, v.matricula, 4, v.anioFabricacion, v.velocidad, v.combustible, v.velocidadMaxima)
        self.__motor = motor


    def marchaAtras():
       if super().__velocidad == 0:
        super().__velocidad = -10
