# Seguimientos de presupuesto

Seguimiento mensual de presupuesto y consumo de Baloto, Megaloto, La Salle, UPB y Corpas.

- `index.html`: estado de cada cuenta en el mes en curso y su alerta principal.
- `seguimiento-<cuenta>.html`: resumen del mes, alertas, medios, campañas e histórico (mismo formato que el seguimiento de Baloto).

## Fuentes

- **Presupuesto y campañas**: [hoja de seguimiento](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit), una pestaña por cuenta, leída en vivo. Si no responde se usa `data/hoja_<cuenta>.js`.
- **Consumo real**: Meta, Google Ads y TikTok por API, en `data/consumo_plataformas.js`.

La lógica de lectura y de alertas vive en `assets/js/hoja.js` (las particularidades de cada pestaña están en `CUENTAS`).

## Actualizar

Desde Meta-Ads-CLI:

```
python tools/update_seguimientos.py
```

Luego subir los cambios con GitHub Desktop.
