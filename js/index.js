seajs.config({
		<%--base:"<%=basePath %>",--%>
		base:"<%=servicename %>",
	    map: [
	      //[/^(.*\.(?:css|js))(.*)$/i, '$1?v='+getTimestamp]
	      [/^(.*\.(?:css|js))(.*)$/i, '$1?v=<%= version%>']
	    ]
});