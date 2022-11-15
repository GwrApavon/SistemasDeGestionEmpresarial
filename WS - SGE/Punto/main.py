from punto3d import *
from punto import punto 

p0 = punto(1,5)
p1 = punto3d(p0,0)
p2 = punto3d()
p3 = punto3d(punto(3,1))

print(p1.distancia(p2))
