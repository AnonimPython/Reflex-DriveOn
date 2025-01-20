import reflex as rx

class UserData(rx.State):
    username: str = rx.LocalStorage(name="username")
    mail: str = rx.LocalStorage(name="mail")

    #* check if user is authenticated
    @rx.var(cache=True)
    def is_authenticated(self) -> bool:
        return bool(self.username and self.mail)

    
    @rx.event
    def check_auth(self):
        # * take current path (url)
        current_path = self.router.page.path
        
        if self.is_authenticated:
            #* redirect to register page if user is authenticated
            if current_path in ["/login", "/register", "/"]:
                return rx.redirect("/tours")
        else:
            #* redirect to register page if user is not authenticated
            if current_path not in ["/login", "/register", "/"]:
                return rx.redirect("/")

    #* set user data for another files
    def set_user_data(self, username: str, mail: str):
        self.username = username
        self.mail = mail
    
    # ! test LocalStorage
    def login(self):
        print(f"User:{self.username} logged in")