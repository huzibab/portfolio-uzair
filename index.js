let trans= document.querySelectorAll(".list-item");
trans.forEach(transition =>{
    transition.addEventListener("mouseover", function(){
        this.style.color = '#064663';
    })
    anchor.addEventListener('mouseout', function() {
        this.style.color = 'black'; // Revert color when not hovering
    });
});
