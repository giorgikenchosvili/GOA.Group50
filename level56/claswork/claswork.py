def domain_name(url):
    if "www" in url:
        url = url.split(".")[1]
    elif "http" in url:
        url = url.split("//")[1:2]
        url = " ".join(url)
        url = url.split(".")[0]
    else:
        url = url.split(".")[0]
    return url