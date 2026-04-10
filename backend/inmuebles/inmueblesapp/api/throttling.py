from rest_framework.throttling import UserRateThrottle

class ComentarioCreateThrottle(UserRateThrottle):
    scope = 'comentario-create'

class ComentarioListThrottle(UserRateThrottle):
    scope = 'list-all-comentarios'