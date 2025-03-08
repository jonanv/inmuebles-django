from django.http import JsonResponse

from .models import Inmueble

# Create your views here.
def list_inmuebles(request) -> JsonResponse:
    inmuebles = Inmueble.objects.all()
    data = {
        'inmuebles': list(inmuebles.values())
    }

    return JsonResponse(data, safe=False)