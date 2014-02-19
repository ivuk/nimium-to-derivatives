walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	var derloc = ['Narnium', 'Niminum', 'Nijmium', 'Nimimum', 'Nimum', 'Minum']
	var derupc = ['NARNIUM', 'NIMINUM', 'NIJMIUM', 'NIMIMUM', 'NIMUM', 'MINUM']
	var resloc = derloc[Math.floor(Math.random() * derloc.length)];
	var resupc = derupc[Math.floor(Math.random() * derupc.length)];

	v = v.replace(/\bNimium\b/g, resloc);
	v = v.replace(/\bNIMIUM\b/g, resupc);
	
	textNode.nodeValue = v;
}

