from django.http import JsonResponse

from .models import Inmueble

# Create your views here.
def list_all_inmuebles(request) -> JsonResponse:
    inmuebles = Inmueble.objects.all()
    data = {
        'inmuebles': list(inmuebles.values())
    }

    return JsonResponse(data, safe=False)

def get_inmueble_by_id(request, id) -> JsonResponse:
    inmueble = Inmueble.objects.get(id=id)
    data = {
        'nombre': inmueble.nombre,
        'direccion': inmueble.direccion,
        'pais': inmueble.pais,
        'ciudad': inmueble.ciudad,
        'descripcion': inmueble.descripcion,
        'imagen': inmueble.imagen,
        'active': inmueble.active,
    }

    return JsonResponse(data, safe=False)