from django.apps import AppConfig


class RealTimeWsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'real_time_ws'

    def ready(self):
        import real_time_ws.signals
