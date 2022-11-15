class Alumno():
    def __init__(self,nombre=""):
        self.nombre=nombre
        self.__secreto="asdasd"

    def secreto(self):
        return self.__secreto
    
    