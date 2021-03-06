module.exports = [
    'uniform mat4 u_view_matrix;',
    'attribute vec2 a_position;',
    'attribute vec2 a_tex_coord;',
    'attribute vec2 a_translate;',
    'attribute vec2 a_scale;',
    'attribute float a_rotation;',
    'varying vec2 v_tex_coord;',
    'void main () {',
    '   float t_cos = cos(a_rotation);',
    '   float t_sin = sin(a_rotation);',
    '   vec2 t_position = a_position * a_scale;',
    '   t_position = vec2(t_position.x * t_cos - t_position.y * t_sin, t_position.x * t_sin + t_position.y * t_cos);',
    '   t_position += a_translate;',
    '   gl_Position = u_view_matrix * vec4(t_position, 1.0, 1.0);',
    '   v_tex_coord = a_tex_coord;',
    '}'
].join('\n');
