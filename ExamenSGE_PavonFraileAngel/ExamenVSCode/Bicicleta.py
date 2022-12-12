from Vehiculo import Vehiculo

class Bicicleta(Vehiculo):

    def __init__(self, v, pedales):
        super().__init__(v.nombre, v.matricula, 2, v.anioFabricacion, v.velocidad, v.velocidadMaxima)
        self.__pedales = pedales


    def pedales():
        print('Voy a pedales')