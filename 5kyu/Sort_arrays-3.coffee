# Sort arrays - 3

sortme = ( courses ) -> courses.sort((a,b) => a.split('-')[1] - b[1].split('-') && a.split('-')[0][0]