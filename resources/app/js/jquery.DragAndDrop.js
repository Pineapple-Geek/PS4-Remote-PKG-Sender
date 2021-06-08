 (function($){
	$.fn.DragAndDrop = function(MonElement) {

		this.each(function(){
				
			var obj = $(this);

			//console.log( "MonElement : " + MonElement);xt() );
			
			// Emp�cher la s�lection des �l�ments � la souris (meilleure gestion du drag & drop)
			var _preventDefault = function(evt) { evt.preventDefault(); };
			$("li").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);

			// Initialisation du composant "sortable"
			$(obj).sortable({
				axis: "y", // Le sortable ne s'applique que sur l'axe vertical
				containment: "." + MonElement, // Le drag ne peut sortir de l'�l�ment qui contient la liste
				
				handle: ".item", // Le drag ne peut se faire que sur l'�l�ment .item (le texte)
				distance: 10, // Le drag ne commence qu'� partir de 10px de distance de l'�l�ment
				// Evenement appel� lorsque l'�l�ment est relach�
				stop: function(event, ui){
					// Pour chaque item de liste
					$(obj).find("li").each(function(){
						// On actualise sa position
						index = parseInt($(this).index()+1);
						// On la met � jour dans la page
						$(this).find(".count").text(index);
					});
				}
			});

			// Pour chaque �l�ment trouv� dans la liste de d�part
			$(obj).find("li").each(function(){
				// On ajoute les contr�les
				//addControls($(this));
			});

		});
				
		/*
		* Fonction qui ajoute les contr�les aux items
		* @Param�tres
		*  - elt: �l�ment courant (liste courante)
		*
		* @Return void
		*/
		
		function addControls(elt)
		{
			// En premier on ajoute un �l�ment textuel
			$(elt).html("<span class='item'>"+$(elt).text()+"</item>");
			// Puis l'�l�ment de position
			//$(elt).prepend('<span class="count">'+parseInt($(elt).index()+1)+'</span>');
			// Puis l'�l�ment d'action (�l�ment achet�)

		}
		
		// On continue le chainage JQuery
		return this;
	};
})(jQuery);