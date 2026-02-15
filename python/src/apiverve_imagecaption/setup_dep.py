from setuptools import setup, find_packages

setup(
    name='apiverve_imagecaption',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image and receive a natural language description of its contents.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/imagecaption?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
