{
	meta : 
	{
		presentation 	: "50d1845dcbeff4102a000014",
		user 			: "50d1845dcbeff4102a000009",
		customer 		: ["50d1845df4d330102a000005", "50d1845df4d330102a000001"],
		department 		: "50d1845dcbeff4102a000004",
		start 			: 1349425092,
		end 			: 1349425143,
		location 		: 	[
								51.937645,
								4.497501
							] 
	} ,
	content	:	[
		{
			type 	: "slide",
			time 	: 1349425092,
			value	: "dayPage",
		} ,
		{
			type 	: "slide",
			time 	: 1349429080,
			value	: "orangePage",
		} ,
		{
			type 	: "survey",
			time 	: 1349429080,
			label	: "Product experience",
			value	: "questionaire1",
			data	: 
				{
					questions : [
					{
						type : "multichoice",
						label : "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
						options : [
							{
								label : "12 pieces of wood",
								value : 12	
							} , 
							{
								label : "5 pieces of wood",
								value : 5	
							} ,
							{
								label : "A single piece of wood",
								value : 1	
							}
						] , 
						answer : "0,2" //index of options array
					} , 
					{
						type : "textinput",
						label : "Describe your experience with this product...", 
						answer : "My experience was good"
					}
				] // end questions
			}
		} ,
		{
			type 	: "slide",
			time 	: 1349429080,
			value	: "testPage"
		} ,
		{
			type 	: "viewPdf",
			time	: 1349429873,
			value	: "year report 2012"
		} , 
		{
			type 	: "viewPdf",
			time	: 1349429899,
			value	: "Advantages"
		} ,
		{
			type 	: "playVideo",
			time	: 1349484201,
			value	: "Symptom description video"
		}
	]
}