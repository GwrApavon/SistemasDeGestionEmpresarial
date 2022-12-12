from Vehiculo import Vehiculo
from Garaje import Garaje
from Moto import Moto
from Bicicleta import Bicicleta
from Coche import Coche

v1 = Vehiculo('Moto', 1920, 0, 1200, 180, '123XML', 20)
v2 = Vehiculo('Bici', 1920, 0, 1200, 180)
v3 = Vehiculo('Moto', 1920, 0, 1200, 180, '456ZNK',40)

moto = Moto(v1, 'pequeño')
bici = Bicicleta(v2, True)
coche = Coche(v3, 'grande') 

vehiculos = []
vehiculos .append(moto)
vehiculos .append(bici)
vehiculos .append(coche)

g = Garaje(3, vehiculos)