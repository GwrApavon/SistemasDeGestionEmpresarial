from Vehiculo import Vehiculo

class Moto(Vehiculo):

    def __init__(self, v, motor):
        super().__init__(v.nombre, v.matricula, 2, v.anioFabricacion, v.velocidad,v.kilometros, v.combustible, v.velocidadMaxima)
        self.__motor = motor


    def caballito():
        print('Puede hacer caballitos')