var app= new Vue({
	el:"#todolist",
	data:{
		appInst:"",
		items:[]
	},
	methods:{
		add:function(){
			this.items.push({title:this.appInst,isCompleted:false});
			this.appInst="";
		},
		del:function(index){
			this.items.splice(index,1);
		}
		// edit:function(){
		// 	this.items=
		// }
	}
})