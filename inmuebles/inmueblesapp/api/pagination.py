from rest_framework.pagination import PageNumberPagination

class EdificacionPagination(PageNumberPagination):
    page_size = 2  # Cantidad de resultados por página
    page_size_query_param = 'size'  # Permite al cliente especificar la cantidad de resultados por página utilizando el parámetro de consulta ?page_size=10
    max_page_size = 100  # Limita la cantidad máxima de resultados por página a 100 para evitar que el cliente solicite demasiados resultados en una sola página
    page_query_param = 'p' # Nombre del parámetro de consulta
    last_page_strings = 'end' # Permite al cliente solicitar la última página utilizando el parámetro de consulta ?page=end, en lugar de tener que calcular el número de página total para acceder a la última página