$(document).ready(function () {
    const $characterImage = $('#character-image');

    // Function to change dress and apply animation
    function changeDress(dressNumber) {
        $characterImage.css('transform', 'scale(1.1)');
        setTimeout(() => $characterImage.css('transform', 'scale(1)'), 200);

        // Placeholder images for each dress (replace these links with actual images)
        $characterImage.attr('src', `https://via.placeholder.com/160x200?text=Dress+${dressNumber}`);
    }

    // Function to change color using box shadow
    function changeColor(color) {
        $characterImage.css('box-shadow', `0 0 15px ${color}`);
    }

    // Event Listeners
    $('.dress-buttons button').on('click', function() {
        const dressNumber = $(this).text().split(' ')[1]; // Extract dress number from button text
        changeDress(dressNumber);
    });

    $('#color-picker').on('change', function() {
        const color = $(this).val();
        changeColor(color);
    });
});
