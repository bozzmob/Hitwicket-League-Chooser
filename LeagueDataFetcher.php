// Create DOM from URL
$html = file_get_html('http://hitwicket.com/league/show/vi-9');

// Find all article blocks
$count = $html->find('.bot_team_name');

print_r($count.length); 