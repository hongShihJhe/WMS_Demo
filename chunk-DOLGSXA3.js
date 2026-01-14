import{a as w}from"./chunk-YJYMFZL6.js";import{f as h}from"./chunk-J5YLOUCF.js";import{c as b}from"./chunk-ON4N7FLT.js";import"./chunk-R7QWAYZF.js";import"./chunk-EFZHTYNP.js";import"./chunk-AFPXVWLC.js";import"./chunk-FPPZ4BUR.js";import{Da as c,Va as o,Wa as r,Xa as f,bb as m,cb as p,db as u,gb as v,za as a}from"./chunk-WU3GBNUU.js";import"./chunk-KAT7YFEL.js";var C=["table"],g=class l{constructor(t,e,i){this.roleService=t;this.router=e;this.containerService=i}table;pageLength=50;tableRef;ngOnInit(){}ngAfterViewInit(){this.init_table(),this.fetchData(),this.clickEvent()}init_table(){let t=this;this.table=$(this.tableRef.nativeElement).DataTable({processing:!0,searching:!0,serverSide:!1,paging:!1,stateSave:!1,columnDefs:[{targets:"_all",orderable:!1}],order:[[1,"asc"]],columns:[{defaultContent:"",title:"actions",className:" text-center",width:75,createdCell:function(e,i,n,s,I){let d=$(`
                     <div class="dropdown no-arrow">
                     <a class="dropdown-toggle dropdown_actions" href="#" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <i class="dropdown_icon fas fa-ellipsis-h fa-fw "></i>
                     </a>
                     <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                             aria-labelledby="dropdownMenuLink">

                         
                     </div>
                 </div>
                 `),y=$(`<a class="dropdown-item dropdown-item-modify btn-role_permission" role="button">
                             <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                             \u89D2\u8272\u6B0A\u9650
                         </a>`);d.find(".dropdown-menu").append(y),$(e).append(d)}},{data:"role_code",title:"\u89D2\u8272\u4EE3\u78BC",orderable:!0},{data:"role_name",title:"\u89D2\u8272\u540D\u7A31"}],initComplete:function(e,i){},pageLength:this.pageLength})}fetchData(){this.table.clear().draw(),this.roleService.getList().then(t=>{t.length===0?alert("\u6C92\u6709\u8CC7\u6599"):this.table.rows.add(t).draw()})}clickEvent(){let t=this;$(this.tableRef.nativeElement).on("click",".btn-role_permission",function(e){let i=$(this).closest("tr");var n=t.table.row(i),s=n.data();t.router.navigateByUrl(`/admin/role/${s.role_code}/permission`)})}static \u0275fac=function(e){return new(e||l)(a(w),a(h),a(b))};static \u0275cmp=c({type:l,selectors:[["app-container_info"]],viewQuery:function(e,i){if(e&1&&m(C,5),e&2){let n;p(n=u())&&(i.tableRef=n.first)}},decls:7,vars:0,consts:[["table",""],[1,"h3","mb-2","text-gray-800"],[1,"card","shadow","mb-4"],[1,"card-body"],[1,"table-responsive"],["width","100%","cellspacing","0",1,"table","table-hover","table-bordered"]],template:function(e,i){e&1&&(o(0,"h1",1),v(1,"\u8F09\u5177\u8CC7\u8A0A"),r(),o(2,"div",2)(3,"div",3)(4,"div",4),f(5,"table",5,0),r()()())},encapsulation:2})};export{g as ContainerInfo};
