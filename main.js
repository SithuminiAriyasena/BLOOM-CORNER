<script>
        // JavaScript to handle the modal functionality as described in Step 3
        var modal = document.getElementById("loginModal");
        var userIcon = document.querySelector(".fa-user");
        var closeModal = document.getElementById("closeModal");

        userIcon.onclick = function() {
            modal.style.display = "block";
        }

        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>