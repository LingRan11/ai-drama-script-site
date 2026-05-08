import os
import sys
from pathlib import Path

from mangum import Mangum

# Ensure backend package imports work in Vercel runtime
PROJECT_ROOT = Path(__file__).resolve().parent.parent
BACKEND_DIR = PROJECT_ROOT / "app" / "backend"
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

from main import app  # noqa: E402


@app.get("/api/config", tags=["runtime-config"])
async def get_runtime_config():
    """Expose minimal frontend runtime config on the same domain."""
    return {
        "API_BASE_URL": os.getenv("VITE_API_BASE_URL", "https://scriptdramaai.sbs"),
    }


# Vercel Python runtime entrypoint
handler = Mangum(app, lifespan="auto")
