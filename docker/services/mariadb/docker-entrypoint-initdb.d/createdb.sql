CREATE DATABASE IF NOT EXISTS `e_commerce_admin` COLLATE 'utf8_general_ci';
GRANT ALL ON `e_commerce_admin`.* TO 'sa'@'%';

CREATE DATABASE IF NOT EXISTS `e_commerce_admin_test` COLLATE 'utf8_general_ci';
GRANT ALL ON `e_commerce_admin_test`.* TO 'sa'@'%';

FLUSH PRIVILEGES;