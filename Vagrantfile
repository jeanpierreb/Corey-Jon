# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  
  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

  config.vm.synced_folder "www/", "/var/www"
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network :private_network, ip: "192.168.3.83"
  
  config.vm.provision "shell", inline: "apt-get -y update"
  config.vm.provision "shell", inline: "apt-get install -y apache2"
  
  config.vm.hostname = "corey.dev"
  config.hostsupdater.aliases = ["www.corey.dev"]

end
