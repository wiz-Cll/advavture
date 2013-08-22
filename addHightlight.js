function addSyntaxHighLight( str ){
	
	var tempArr = str.split('<pre><code>$');
	var codeCount = tempArr.length;
	if( codeCount > 1 ){
		for( var i=0; i+1 < codeCount; i++){
			var languageEnd = tempArr[i+1].indexOf('$');

			var languageType = tempArr[i+1].substr(0, languageEnd );
			tempArr[i] +='<pre class="line-numbers"><code class="language-' + languageType + '">';
			tempArr[i+1] = tempArr[i+1].substr( languageEnd+1, tempArr[i+1].length);
			console.log( i );
		}
	}

	return tempArr.join('');
}

var str = 'efawehjfgawfg<pre><code>$markup$fioaejwfwfwh';

console.log( addSyntaxHighLight( str ) );