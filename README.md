# doitfast

Petit Rappel 

Comment pousser mes fichier sur git

1. git add .
2. git commit -m "Ajout de fichiers HTML et CSS"
3. git push

-------------------------------------------------------------------------------

Comment installer Sass (Windows)

1. installer le fichier Ruby https://rubyinstaller.org/
2. Vérifier l'installation 
	ruby -v
	gem -v
3. installer la derniere version de nokogiri 
	gem install nokogiri
4. Et installer sass 
	gem install sass  
5. Créer les 2 fichier css et sass
	nomDeFichierSCSS.scss est le fichier Sass que vous souhaitez compiler.
	nomDeFichierCSS.css est le nom du fichier CSS de sortie que vous souhaitez créer.
6. Compilation des fichiers
	sass input.scss output.css

Ne pas oublier de compiler le fichier sass afin d'avoir le résultat