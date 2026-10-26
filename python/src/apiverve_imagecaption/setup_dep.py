from setuptools import setup, find_packages

setup(
    name='apiverve_imagecaption',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Image Caption generates natural language descriptions for uploaded image files. Upload a JPG, PNG, or GIF up to 5MB to receive an automated caption for alt text and media tagging.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/imagecaption?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
