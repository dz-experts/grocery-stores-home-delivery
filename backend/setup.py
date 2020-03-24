from setuptools import setup

cli_name = "mendarkom"

setup(
    name=cli_name,
    version="0.1",
    py_modules=["cli"],
    install_requires=["Click",],
    entry_points=f"""
        [console_scripts]
        {cli_name}=cli.cli:app
    """,
)
