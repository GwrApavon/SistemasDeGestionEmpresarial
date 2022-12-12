from Vehiculo import Vehiculo
class Garaje():

    def __init__(self, numVehiculos, Vehiculos):
        self.__numVehiculos = numVehiculos
        self.__Vehiculos = Vehiculos

    def totalKilometros(self):
        for i in range(len(self.__Vehiculos)):
            print('El vehiculo:' self.__Vehiculos[i].nombre + ' tiene ' self.__Vehiculos[i].kilometros + ' kilometros recorridos')
        
    def totalCombustible(self):
        for i in range(len(self.__Vehiculos)):
            print('El vehiculo:' self.__Vehiculos[i].nombre + ' tiene ' self.__Vehiculos[i].comubustible + ' litros de combustible')

    def añadirVehiculo(self, vehiculo):
        self.__numVehiculos += 1
        self.__Vehiculos.append(vehiculo)
    
    def quitarVehiculo(self, matricula):
        for i in range(len(self.__Vehiculos)):
            if self.__Vehiculos[i].matricula == matricula:
                self.__Vehiculos.remove(self.__Vehiculos[i])
