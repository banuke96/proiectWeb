# Aplicație web acordarea anonimă de note

## Obiectiv
Realizarea unei aplicații web care să permită acordarea de punctaje anonime de catre un juriu anonim de studenti proiectului altor studenti.


Platforma este bazata pe o aplicatie web cu arhitectura de tip *Single Page Application*. 

Aplicatia va putea fi folosita atat de colegi, cat si de profesor.

### Componente

* Sign up/Sign in
* Informatii proiect cu upload livrabile partiale
* Vizualizarea tuturor proiectelor
* Notarea unui proiect 

### Interfata grafica

![alt text](https://raw.githubusercontent.com/banuke96/proiectWeb/master/docs/flow1jpg.jpg)

![alt-text](https://raw.githubusercontent.com/banuke96/proiectWeb/master/docs/flow2jpg.jpg)


### Actiunile utilizatorului
 * Inregistrare cu email si parola, alegand numele echipei din care face parte
 * Autentificare cu email si parola
 * Incarcare, modificare si stergere fisiere in cele doua faze ale proiectului  
 * Vizualizarea tuturor proiectelor (video demonstrativ)
 * Notarea unui proiect
 
### Exemple requesturi
 * get /projects
 * post /projectpart1
 * put /projectgrade
 
