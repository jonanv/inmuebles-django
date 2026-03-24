from rest_framework.pagination import PageNumberPagination

class EdificacionPagination(PageNumberPagination):
    page_size = 2  # Cantidad de resultados por página
    page_size_query_param = 'page_size'  # Permite al cliente especificar la cantidad de resultados por página utilizando el parámetro de consulta ?page_size=10
    max_page_size = 100  # Limita la cantidad máxima de resultados por página a 100 para evitar que el cliente solicite demasiados resultados en una sola página