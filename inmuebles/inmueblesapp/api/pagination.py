from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

class EdificacionPagination(PageNumberPagination):
    page_size = 2  # Cantidad de resultados por página
    page_size_query_param = 'size'  # Permite al cliente especificar la cantidad de resultados por página utilizando el parámetro de consulta ?size=10
    max_page_size = 100  # Limita la cantidad máxima de resultados por página a 100 
    page_query_param = 'p' # Nombre del parámetro de consulta
    last_page_strings = 'end' # Permite al cliente solicitar la última página utilizando el parámetro de consulta ?page=end, en lugar de tener que calcular el número de página total para acceder a la última página

class EfificacionLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2  # Cantidad de resultados por página
    limit_query_param = 'limit'  # Permite al cliente especificar la cantidad de resultados por página utilizando el parámetro de consulta ?limit=10
    offset_query_param = 'offset'  # Permite al cliente especificar el número de resultados a omitir antes de comenzar a mostrar los resultados utilizando el parámetro de consulta ?offset=20
    max_limit = 100  # Limita la cantidad máxima de resultados por página a 100