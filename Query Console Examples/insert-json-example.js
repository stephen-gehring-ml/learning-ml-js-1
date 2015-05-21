//https://docs.marklogic.com/xdmp.documentInsert?q=documentInsert&v=8.0&api=true


/*

xdmp.documentInsert(
   $uri as String,
   $root as Node,
   [$permissions as Object[]],
   [$collections as String[]],
   [$quality as xs.int?],
   [$forest-ids as String[]]
) as null

*/

// BASIC ML INSERT COMMAND 
declareUpdate();
var obj = {key1:"value1", key2:"value2"}; xdmp.documentInsert("/simple.json", obj);
xdmp.documentInsert("/simple.json", obj);


// BASIC ML INSERT COMMAND W/ PERMISSIONS
declareUpdate();
var col = "my-phrases"; // NameSpace
var perms = [xdmp.permission("qconsole-user", "read"), xdmp.permission("qconsole-user", "update")];
xdmp.documentInsert("/fox.json", fox, perms, col);


