
/*
 * 行追加
 */
function insertRow(id) {
  // テーブル取得
  var table = document.getElementById(id);
  // 行を行末に追加
  var row = table.insertRow(-1);
  // 行数取得
  var row_len = table.rows.length;

  //　行の属性設定
  row.setAttribute("id","tr_" + (table.rows.length - 1));
  row.setAttribute("onclick","tableClick(this)");
 

  // セルの挿入
  var cell_id  = row.insertCell(-1);
  var cell_status  = row.insertCell(-1);
  var cell_plan_Date  = row.insertCell(-1);
  var cell_plan_amount  = row.insertCell(-1);
  var cell_plan_accuracy  = row.insertCell(-1);

  var cell_create_date  = row.insertCell(-1);
  var cell_checkbox  = row.insertCell(-1);

  var cell_lst_netting  = row.insertCell(-1);
  var cell_lst_deduction = row.insertCell(-1);
  var cell_lst_difference = row.insertCell(-1);

  var cell_lst_plan_Date_upd = row.insertCell(-1);
  var cell_lst_plan_amount_upd = row.insertCell(-1);
  var cell_lst_plan_accuracy_upd = row.insertCell(-1);

  var cell_lst_netting_upd = row.insertCell(-1);
  var cell_lst_deduction_upd = row.insertCell(-1);
  var cell_lst_difference_upd = row.insertCell(-1);
  
  // ボタン用 HTML
  var delButton = '<input type="button" value="行削除" onclick="deleteRow(this)"  disabled/>';
  var delCheckbox = '<input type="checkbox" name="chkdel" onclick="checkDel(this);" />';
  var inNumber='<input type="text" size="18" class="right" onfocus="offComma(this)" onblur="toComma(this)" ';
  var inSelect='<select><option value=""></option><option value="A">A</option> <option value="B">B</option> <option value="C">C</option> </select>'
  var inDate='<input type="string" size="10" />';

  
  var add_lst_id = "lst_id_" + (table.rows.length - 1);
  var add_lst_status = "lst_status_" + (table.rows.length - 1);
  var add_lst_plan_Date = "lst_plan_Date_" + (table.rows.length - 1);
  var add_lst_plan_amount = "lst_plan_amount_" + (table.rows.length - 1);
  var add_lst_plan_accuracy = "lst_plan_accuracy_" + (table.rows.length - 1);
  var add_lst_create_date = "lst_create_date_" + (table.rows.length - 1);
  var add_lst_netting = "lst_netting_" + (table.rows.length - 1);
  var add_lst_deduction = "lst_deduction_" + (table.rows.length - 1);
  var add_lst_difference = "lst_difference_" + (table.rows.length - 1);
  var add_lst_plan_Date_upd = "lst_plan_Date_upd_" + (table.rows.length - 1);
  var add_lst_plan_amount_upd = "lst_plan_amount_upd_" + (table.rows.length - 1);
  var add_lst_plan_accuracy_upd = "lst_plan_accuracy_upd_" + (table.rows.length - 1);
  var add_lst_netting_upd = "lst_netting_upd_" + (table.rows.length - 1);
  var add_lst_deduction_upd = "lst_deduction_upd_" + (table.rows.length - 1);
  var add_lst_difference_upd = "lst_difference_upd_" + (table.rows.length - 1);
  

  cell_id.setAttribute("id",add_lst_id);    
  cell_id.setAttribute("class","hidden");
  cell_id.innerHTML = "";

  cell_status.setAttribute("id",add_lst_status);  
  cell_status.setAttribute("class","center");  
  cell_status.innerHTML ="新規";

  cell_plan_Date.setAttribute("id",add_lst_plan_Date);  
  cell_plan_Date.setAttribute("class","left"); 
  //cell_plan_Date.innerHTML  = inDate;

  cell_plan_amount.setAttribute("id",add_lst_plan_amount);  
  cell_plan_amount.setAttribute("class","right");  
  //cell_plan_amount.innerHTML  = inNumber+ " id='lst_plan_amount_" + row_len + "' />";

  cell_plan_accuracy.setAttribute("id",add_lst_plan_accuracy);    
  cell_plan_accuracy.setAttribute("class","center");
  //cell_plan_accuracy.innerHTML  = inSelect;

  cell_create_date.setAttribute("id",add_lst_create_date);   
  cell_create_date.setAttribute("class","left");    
  //cell_create_date.innerHTML = "";

 
  cell_checkbox.setAttribute("class","center"); 
  cell_checkbox.innerHTML = delButton; 

  cell_lst_netting.setAttribute("id",add_lst_netting);
  cell_lst_netting.setAttribute("class","hidden");
  //cell_lst_netting.innerHTML = inNumber + " id='lst_netting_" + row_len + "' />";


  cell_lst_deduction.setAttribute("id",add_lst_deduction);
  cell_lst_deduction.setAttribute("class","hidden");
  //cell_lst_deduction.innerHTML = inNumber + " id='lst_deduction_" + row_len + "' />";

  cell_lst_difference.setAttribute("id",add_lst_difference); 
  cell_lst_difference.setAttribute("class","hidden");
  //cell_lst_difference.innerHTML = inNumber + " id='lst_difference_" + row_len + "' />";

  cell_lst_plan_Date_upd.setAttribute("id",add_lst_plan_Date_upd); 
  cell_lst_plan_Date_upd.setAttribute("class","hidden");
  //cell_lst_plan_Date_upd.innerHTML = inDate;

  cell_lst_plan_amount_upd.setAttribute("id",add_lst_plan_amount_upd); 
  cell_lst_plan_amount_upd.setAttribute("class","hidden"); 
  //cell_lst_plan_amount_upd.innerHTML = inNumber + " id='lst_amount_upd_" + row_len + "' />";

  cell_lst_plan_accuracy_upd.setAttribute("id",add_lst_plan_accuracy_upd); 
  cell_lst_plan_accuracy_upd.setAttribute("class","hidden");
  //cell_lst_plan_accuracy_upd.innerHTML  = inSelect;

  cell_lst_netting_upd.setAttribute("id",add_lst_netting_upd); 
  cell_lst_netting_upd.setAttribute("class","hidden"); 
  //cell_lst_netting_upd.innerHTML = inNumber + " id='lst_netting_upd_" + row_len + "' />";

  cell_lst_deduction_upd.setAttribute("id",add_lst_deduction_upd); 
  cell_lst_deduction_upd.setAttribute("class","hidden");
  //cell_lst_deduction_upd.innerHTML = inNumber + " id='lst_deduction_upd_" + row_len + "' />";

  cell_lst_difference_upd.setAttribute("id",add_lst_difference_upd);     
  cell_lst_difference_upd.setAttribute("class","hidden");
  //cell_lst_differenc_upd.innerHTML = inNumber + " id='lst_difference_upd_" + row_len + "' />";

  



//選択状態をクリアして追加行を選択。
resetTr("BranchListDB");
row.setAttribute("class","sel_row");

   //選択された行のidをセットして詳細表示
   document.getElementById( "sel_oppbranchid" ).value = "";
   document.getElementById( "status_b" ).innerHTML = "新規";
   
   document.getElementById( "plan_Date_b" ).innerHTML = "";
   document.getElementById( "plan_amount_b" ).innerHTML = "";
   document.getElementById( "plan_accuracy_b" ).innerHTML = "";
   
   document.getElementById( "netting_b" ).innerHTML = "";
   document.getElementById( "deduction_b" ).innerHTML = "";
   document.getElementById( "difference_b" ).innerHTML = "";
    
   document.getElementById( "plan_Date_a" ).value = "";
   document.getElementById( "plan_amount_a" ).value　= "";
   document.getElementById( "plan_accuracy_a" ).value = "";
   document.getElementById( "netting_a" ).value = "";
   document.getElementById( "deduction_a" ).value = "";
   document.getElementById( "difference_a" ).innerHTML = "";
   }

/**
* 行削除
*/
function upddelRow(obj) {
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  //if (tr.cell2.innerHTML === "削除") {
  //  tr.removeClass("delete_row");
  //} else {
    // 論理削除的にグレーアウト
    tr.setAttribute("class","delete_row");
    tr.cell2.innerHTML = "削除";

    //}
}


function deleteRowDB(obj){

// 削除ボタンを押下された行を取得
tr = obj.parentNode.parentNode;
table = tr.parentNode;
rowidx = tr.sectionRowIndex;
//alert("選択行⇒:" + rowidx);

var result = window.confirm("選択した実行予定を削除してよろしいですか？");

if( result ) {

  //選択された行を削除するSQLを生成
  oppbrid = table.rows[rowidx].cells[0].innerHTML;
  oppid = document.getElementById("sel_oppid").value;

  var strsql = "UPDATE public.oppbranch SET ";     
  strsql = strsql + "del_flg = true ";
  strsql = strsql + "WHERE extid='" + oppid + "' ";
  strsql = strsql + "AND oppbranchid ='" + oppbrid + "' ";

  //SQLを設定
  document.getElementById( "sendsql" ).value = strsql;
  //alert("コレを送る⇒" + document.getElementById( "sendsql" ).value);
  //submit
  document.getElementById("fm_opplist").submit();
}
}

/**
* 行削除
*/
function deleteRow(obj) {
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  //table = tr.parentNode;
  //rowidx = tr.sectionRowIndex;
//  alert("選択行⇒:" + rowidx);

  var result = window.confirm("選択した実行予定を削除してよろしいですか？");

  if( result ) {
      //選択された行を削除するSQLを生成
      oppbrid = table.rows[rowidx].cells[0].innerHTML;
      oppid = document.getElementById("sel_oppid").value;

      var strsql = "UPDATE public.oppbranch SET ";     
      strsql = strsql + "del_flg = true ";
      strsql = strsql + "WHERE extid='" + oppid + "' ";
      strsql = strsql + "AND oppbranchid ='" + oppbrid + "' ";

      //SQLを設定
      document.getElementById( "sendsql" ).value = strsql;
      //alert("コレを送る⇒" + document.getElementById( "sendsql" ).value);
      //submit
      document.getElementById("fm_opplist").submit();

  } else {
    //alert("やめたよ！");
  }
  
}


function checkDel(obj) {
// 削除チェックボックスがクリックされた行を取得
tr = obj.parentNode.parentNode;
table = tr.parentNode;
　rowidx = tr.sectionRowIndex;

if (obj.checked==true){
  
  // 論理削除的にグレーアウト
  tr.setAttribute("class","delete_row");
  table.rows[rowidx].cells[1].innerHTML="削除";

}else{

  tr.removeAttribute("class","delete_row");
  
  if (table.rows[rowidx].cells[0].innerHTML==""){
    table.rows[rowidx].cells[1].innerHTML="追加";
  } else {
  table.rows[rowidx].cells[1].innerHTML="";
  }
}
}


function nvl(obj){
if (obj == null) {
  obj = "";
} 
}

/**************************
* カンマ編集を行うFunction
**************************/
function toComma(obj){
if((obj.value).trim().length != 0 && !isNaN(obj.value)){
  obj.value = Number(obj.value).toLocaleString();
}
}


/**************************
* カンマ編集を解除するFunction
**************************/
function offComma(obj){
var reg = new RegExp(",", "g");
var chgVal = obj.value.replace(reg, "");
if(!isNaN(chgVal)){
  obj.value = chgVal;  //値セット
  obj.select();        //全選択
}
}

/**************************
* カンマ編集を解除するFunction
**************************/
function offCommaVal(str){
var reg = new RegExp(",", "g");
var chgVal = str.replace(reg, "");
if(!isNaN(chgVal)){
  return chgVal;  //変換した結果をかえす
}
}

/**************************
* カンマ編集を解除するFunction
**************************/
function nulltoblank(str){

if(str == null){
  return '';  //変換した結果をかえす
} else {
  return str;
}

}

function btnCancel_Click()
{
var result = window.confirm("入力内容を破棄してよろしいですか？");

if( result ) {
    console.log('OKがクリックされました');
    location.reload();
    }
  else {
      console.log('キャンセルがクリックされました');
  }
}

function btnOK_click()
{
var result = window.confirm("保存してよろしいですか？");

if( result ) {
    
  if(document.getElementById( "status_b").innerHTML=="新規"){
    var strsql = " INSERT INTO public.oppbranch ";
    strsql = strsql + "(extid, status, plan_date, plan_date_edit, plan_amount, plan_amount_edit, ";
    strsql = strsql + "plan_accuracy, plan_accuracy_edit, create_date, update_date, ";
    strsql = strsql + "netting, netting_edit, deduction, deduction_edit, difference, difference_edit)";
    strsql = strsql + "VALUES (";
    strsql = strsql + "'" + document.getElementById( "sel_oppid" ).value +"'::character(18), ";
    strsql = strsql + "' ', ";
    strsql = strsql + "'" + document.getElementById( "plan_Date_a").value +"'::date, ";
    strsql = strsql + "'" + document.getElementById( "plan_Date_a").value +"'::date, ";
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "plan_amount_a" ).value) + ",0)::numeric, ";
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "plan_amount_a" ).value) + ",0)::numeric, ";
    strsql = strsql + "'" + document.getElementById( "plan_accuracy_a" ).value + "'::character(1), ";
    strsql = strsql + "'" + document.getElementById( "plan_accuracy_a" ).value + "'::character(1), ";
    strsql = strsql + "current_timestamp, current_timestamp, "
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "netting_a" ).value) + ",0)::numeric, ";
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "netting_a" ).value) + ",0)::numeric, ";
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "deduction_a" ).value) + ",0)::numeric, ";
    strsql = strsql + "COALESCE(" + offCommaVal(document.getElementById( "deduction_a" ).value) + ",0)::numeric, ";
    strsql = strsql + (offCommaVal(document.getElementById( "netting_a" ).value) -  offCommaVal(document.getElementById( "deduction_a" ).value)) + "::numeric,";
    strsql = strsql + (offCommaVal(document.getElementById( "netting_a" ).value) -  offCommaVal(document.getElementById( "deduction_a" ).value)) + "::numeric" ;
    strsql = strsql + ")";

  } else {
  
    var strsql = "UPDATE public.oppbranch SET ";     
    strsql = strsql + "status = '変更', ";
    strsql = strsql + "plan_date_edit = '" + document.getElementById( "plan_Date_a").value +"'::date, ";
    strsql = strsql + "plan_amount_edit = " + offCommaVal(document.getElementById( "plan_amount_a").value) +"::numeric, ";
    strsql = strsql + "plan_accuracy_edit = '" + document.getElementById( "plan_accuracy_a").value +"'::character(1) , ";
    strsql = strsql + "update_date = current_timestamp, "
    strsql = strsql + "netting_edit = " + offCommaVal(document.getElementById( "netting_a" ).value) +"::numeric, ";
    strsql = strsql + "deduction_edit = " + offCommaVal(document.getElementById( "deduction_a" ).value) +"::numeric, ";
    strsql = strsql + "difference_edit = " + (offCommaVal(document.getElementById( "netting_a" ).value) - offCommaVal(document.getElementById( "deduction_a" ).value)) +"::numeric ";
    strsql = strsql + "WHERE extid='" + document.getElementById( "sel_oppid" ).value +"' ";
    strsql = strsql + "AND oppbranchid ='" + document.getElementById( "sel_oppbranchid" ).value +"' ";


  }

  //SQLを設定
  document.getElementById( "sendsql" ).value = strsql;
  //alert(strsql);
  //submit
  document.getElementById("fm_opplist").submit();
 
} else {

  //alert('保存をキャンセルしました。');
}
}

//テーブルの背景色初期化
function resetTr(id) {
  // テーブル取得
  var table = document.getElementById(id);
  // 行数
  var rowcnt = table.rows.length;
  for(var i = 1; i < rowcnt; i++) {

    var trid = "tr_" + i;
    if(document.getElementById(trid).classList.contains("sel_row")){
        document.getElementById(trid).classList.remove("sel_row");
    }
    
  }
}
