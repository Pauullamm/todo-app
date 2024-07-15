import psycopg2
from config import load_config

def command():
    commands = """
                CREATE TABLE Profiles (
                id SERIAL PRIMARY KEY,
                note_title VARCHAR(255),
                note_text VARCHAR(255),
                priority VARCHAR(255)
                );
                """
    try:
        config = load_config()
        with psycopg2.connect(**config) as conn:
            with conn.cursor() as cur:
                # Split the string into separate SQL commands
                commands = commands.split(";")

                # Execute each command
                for command in commands:
                    if command.strip():  # Skip empty lines
                        cur.execute(command.strip())
    except (psycopg2.DatabaseError, Exception) as error:
        print(error)

if __name__ == '__main__':
    command()