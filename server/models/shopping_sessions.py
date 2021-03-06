from sqlalchemy import Table, Column, ForeignKey, Integer, String, Float, Date, DateTime
from config.db import meta, engine
from sqlalchemy.sql.sqltypes import Integer, String
from sqlalchemy.sql import func

shopping_sessions = Table("shopping_sessions", meta,
    Column("id", Integer, primary_key=True),
    # Column("user_id", Integer),
    Column("user_id", Integer, ForeignKey("users.id")),
    Column("total", Float, server_default = "0.00", default=0.00),
    Column("created_at", DateTime, server_default = func.now()),
    Column("modified_at", DateTime, server_default = func.now())
)

# meta.create_all(engine)

#Por copilot
# Column("modified_at", DateTime, server_default = func.now(), onupdate = func.now())
